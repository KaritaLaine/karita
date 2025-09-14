import { createFileRoute } from "@tanstack/react-router";
import { Projects } from "../pages/projects/projects";

export const Route = createFileRoute("/projects")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <Projects />
    </div>
  );
}
