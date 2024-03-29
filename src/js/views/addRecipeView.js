/*
Used for rendering the bookmarks of the recipe.
*/

import icons from "url:../../img/icons.svg"; // Parcel imported itself
import previewView from "./previewView.js";
import View from "./view.js";

class AddRecipeView extends View {
  _parentElement = document.querySelector(".upload");
  _successMessage = "Recipe was successfully added";
  _window = document.querySelector(".add-recipe-window");
  _overlay = document.querySelector(".overlay"); // area outside the modal
  _btnOpen = document.querySelector(".nav__btn--add-recipe");
  _btnClose = document.querySelector(".btn--close-modal");

  toggleWindow() {
    // if toggled, affects the
    this._overlay.classList.toggle("hidden");
    this._window.classList.toggle("hidden");
  }

  _addHandlerShowWindow() {
    this._btnOpen.addEventListener("click", this.toggleWindow.bind(this));
  }

  _addHandlerHideWindow() {
    this._btnClose.addEventListener("click", this.toggleWindow.bind(this));
    this._overlay.addEventListener("click", this.toggleWindow.bind(this));
  }

  addUploadRecipeData(handler) {
    // handle user upload data
    this._parentElement.addEventListener("submit", function (e) {
      e.preventDefault();
      const dataArr = [...new FormData(this)];
      const data = Object.fromEntries(dataArr);
      handler(data);
    });
  }
  // run function as soon as the page reloads
  constructor() {
    super();
    this._addHandlerShowWindow();
    this._addHandlerHideWindow();
  }
}

export default new AddRecipeView();
