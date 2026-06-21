import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
const SplitNotFoundComponent = () => /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center", children: /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
  /* @__PURE__ */ jsx("h1", { className: "text-3xl font-semibold", children: "Case study not found" }),
  /* @__PURE__ */ jsx(Link, { to: "/", className: "mt-4 inline-block text-sm text-muted-foreground underline", children: "Back home" })
] }) });
export {
  SplitNotFoundComponent as notFoundComponent
};
