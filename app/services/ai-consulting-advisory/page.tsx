import { createPlaceholderRoute } from "@/app/lib/placeholder-route";

const route = createPlaceholderRoute("/services/ai-consulting-advisory");
export const metadata = route.metadata;
export default route.Page;
