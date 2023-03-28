# Draggable-Sortable-List
A temple list where items can be dragged and shuffled with respect to each other.

## Phase
Frontend, Responsive

## Technology used
HTML, CSS, Javascript

## Description
- A list of bar type blocks displaying Temples image and names
- The individual item from the list can be dragged and placed at some other position in the list
- The list is then shuffled and sorted accordingly

## Implementation

1. All the items are made `draggable=true` to allow the dragging.
2. All items are attached with 2 subsequent **Event Listeners**:
   1. **dragstart** : triggered when the item is started to be dragged.
   2. **dragend** : triggered when the item is strop dragging i.e., dropped.
3. The opacity of the item dragged is reduced to `0` on dragstart and after the drag ends it is again made opaque to be visible.
4. The drop space where the dragged item can be dropped is attached with another Event Listener: **dragover** , 
    which is triggered when any item is dragged over the corresponding drop space.
5. The item dragged occupies the new position in the list just above another item over which it is dropped.
6. This item (above which the dragged item is placed) is the position closest to the drop point below it and is calculated by:
    ` clientY of the dragging item < offsetTop + offsetHeight/2 of the replaceable item `

## Concepts implemented
  - Event listeners: dragstart, dragend, dragover
  - Flexbox
  - Sortable listing
  
## Future
- Implement *grab* cursor on item while dragging 
- Holding the dragged item opaque while the leftover space should be transparent
- Items fetched from some API

****************************************************************************************
### Demo video

https://user-images.githubusercontent.com/39863626/228350930-9309560f-9ea5-4465-a7cc-dfa69c2eda78.mp4


### Snapshots

![Draggable2](https://user-images.githubusercontent.com/39863626/228347654-b79de388-2371-4e01-89d1-04b7cac69257.png)

![Draggable1](https://user-images.githubusercontent.com/39863626/228347594-5d6767d4-a5df-45a3-9eb7-03857881b9a6.png) 

