
import { LikeComponent } from "./likeButtonComponent";

let component = new LikeComponent(10, false); 
component.onClick();
console.log(`likes: ${component.likesCount}, isSelected: ${component.isSelected}`)

