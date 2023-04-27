import { V2_MetaFunction } from "@remix-run/react";
import { APP_NAME } from "~/constants/app";
import { ClientOnly } from "remix-utils";
import PageContent from "./PageContent.client";

export const meta: V2_MetaFunction = () => [
  {
    title: `Home - ${APP_NAME}`,
  },
];

export default function AppIndexPage() {
  return <ClientOnly fallback={null}>{() => <PageContent />}</ClientOnly>;
}
