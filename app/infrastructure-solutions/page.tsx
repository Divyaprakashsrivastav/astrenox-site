import { createPlaceholderRoute } from "@/app/lib/placeholder-route";

const route = createPlaceholderRoute("/infrastructure-solutions");
export const metadata = route.metadata;
export default route.Page;
