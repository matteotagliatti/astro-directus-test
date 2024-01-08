import { createDirectus, rest } from "@directus/sdk";
const data = import.meta.env.PUBLIC_DIRECTUS_URL;

const directus = createDirectus<MySchema>(data).with(rest());

export default directus;
