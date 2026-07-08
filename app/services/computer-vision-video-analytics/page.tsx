import { createPlaceholderRoute } from "@/app/lib/placeholder-route";

const route = createPlaceholderRoute("/services/computer-vision-video-analytics");
export const metadata = route.metadata;
export default route.Page;
