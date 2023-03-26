const dropSpace = document.querySelector('.sortable-list');
const draggables=document.querySelectorAll('.item');
let dragged=null;

draggables.forEach((item)=>{
    item.addEventListener('dragstart',()=>{
        dragged=item;
        setTimeout(()=>{
            item.classList.add('dragged');
        },0);
        
    });
    item.addEventListener('dragend',()=>{
        dragged=null;
        item.classList.remove('dragged');
    })
});
const getDropPosition=(y)=>{
    const unDraggedItems = [...dropSpace.querySelectorAll('.item:not(.dragged)')];
    return unDraggedItems.find((item)=>{
        return y < item.offsetTop+item.offsetHeight/2;
    });
}
dropSpace.addEventListener('dragover',(e)=>{
    e.preventDefault();
    const replacement = getDropPosition(e.clientY);
    dropSpace.insertBefore(dragged,replacement);

})