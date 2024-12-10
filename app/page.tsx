"use client";

import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/api";
import { Amplify } from "aws-amplify";
import type { Schema } from "@/amplify/data/resource";
import "./../app/app.css";
import awsconfig from "../aws-exports";
import "@aws-amplify/ui-react/styles.css";
import ProtectedRoute from '@/components/auth/ProtectedRoute';

// Configure Amplify with API configuration
Amplify.configure({
  ...awsconfig,
  API: {
    GraphQL: {
      endpoint: awsconfig.aws_appsync_graphqlEndpoint,
      region: awsconfig.aws_appsync_region,
      defaultAuthMode: 'apiKey',
      apiKey: awsconfig.aws_appsync_apiKey
    }
  }
});

// Generate the typed client
const client = generateClient<Schema>();

type TodoType = Schema['Todo'] & {
  id: string;
  content: string;
  createdAt: string;
  updatedAt: string;
};

export default function App() {
  const [todos, setTodos] = useState<TodoType[]>([]);

  useEffect(() => {
    let isSubscribed = true;

    const loadTodos = async () => {
      try {
        const sub = client.models.Todo.observeQuery().subscribe({
          next: ({ items }) => {
            if (isSubscribed) {
              setTodos(items as TodoType[]);
            }
          },
          error: (error) => {
            console.error('Subscription error:', error);
          }
        });

        return () => {
          sub.unsubscribe();
        };
      } catch (error) {
        console.error('Error setting up subscription:', error);
      }
    };

    const cleanup = loadTodos();
    
    return () => {
      isSubscribed = false;
      cleanup?.then(unsub => unsub?.());
    };
  }, []);

  async function createTodo() {
    const content = window.prompt("Todo content");
    if (content) {
      try {
        await client.models.Todo.create({
          content: content,
        });
      } catch (error) {
        console.error('Error creating todo:', error);
      }
    }
  }

  return (
    <ProtectedRoute>
      <main>
        <h1>My todos</h1>
        <button onClick={createTodo}>+ new</button>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>{todo.content}</li>
          ))}
        </ul>
        <div>
          🥳 App successfully hosted. Try creating a new todo.
          <br />
          <a href="https://docs.amplify.aws/nextjs/start/quickstart/nextjs-app-router-client-components/">
            Review next steps of this tutorial.
          </a>
        </div>
      </main>
    </ProtectedRoute>
  );
}
