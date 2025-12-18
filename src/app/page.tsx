"use client";

import Layout from "@/components/layout";
import Content from "@/modules/home/content";
import ProtectedRoute from "@/components/protected-route";
import { Suspense } from "react";

export default function Home() {
  return (
    <ProtectedRoute>
      <Layout>
        <Suspense fallback={<div>Loading...</div>}>
          <Content />
        </Suspense>
      </Layout>
    </ProtectedRoute>
  );
}
