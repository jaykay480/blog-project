import React from "react";

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-6 text-lamaPurple">About Us</h1>

      <p className="text-lg text-gray-700 leading-7 mb-6">
        Welcome to our blog! We’re a group of passionate developers and
        designers who love sharing insights, tutorials, and thoughts on web
        development, frontend frameworks, tools, and best practices.
      </p>

      <p className="text-lg text-gray-700 leading-7 mb-6">
        Whether you&apos;re a seasoned engineer or just getting started, our
        goal is to provide helpful, accessible, and actionable content that
        inspires you to build better web experiences. We cover technologies like
        React, Next.js, Tailwind CSS, TypeScript, and much more.
      </p>

      <p className="text-lg text-gray-700 leading-7 mb-6">
        This platform is also a place for us to document our own learning and
        growth. We believe in open knowledge and community-driven development,
        and we&apos;re excited to have you here.
      </p>

      <p className="text-lg text-gray-700 leading-7">
        Thanks for stopping by — we hope you enjoy exploring the content as much
        as we enjoy creating it!
      </p>
    </div>
  );
}
