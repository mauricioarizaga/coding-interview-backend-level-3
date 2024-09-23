import { createItem, getAllItems, getItemById } from "./Item.routes";
import { getPing } from "./ping.routes";
export const routes = [getPing, createItem, getAllItems, getItemById];
