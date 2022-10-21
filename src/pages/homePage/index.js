import { verifyPermission } from "../../scripts/homePage.js";
import { renderUserImage } from "../../scripts/homePage.js";
import { renderPosts } from "../../scripts/homePage.js";
import { createNewPost } from "../../scripts/homePage.js";

verifyPermission();
renderUserImage();
renderPosts();
createNewPost();
