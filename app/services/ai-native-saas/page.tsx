import { createPlaceholderRoute } from "@/app/lib/placeholder-route";

const route = createPlaceholderRoute("/services/ai-native-saas");
export const metadata = route.metadata;
export default route.Page;
