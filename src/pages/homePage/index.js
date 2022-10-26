import { verifyPermission } from "../../scripts/homePage.js";
import { renderUserImage } from "../../scripts/homePage.js";
import { renderPosts } from "../../scripts/homePage.js";
import { createNewPost } from "../../scripts/homePage.js";
// import { logoutAPI } from "../../scripts/homePage.js"
import { modalLogOut } from "../../scripts/modals.js"

verifyPermission();
renderUserImage();
renderPosts();
createNewPost();
// logoutAPI();
modalLogOut()
