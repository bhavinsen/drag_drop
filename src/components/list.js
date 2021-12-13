import { useContext, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { DataContext } from "./context";
import './list.css';


const getItemStyle = (isDragging, draggableStyle) => ({
    userSelect: "none",
    padding: 16,
    margin: `0 0 8px 0`,
    display: "flex",
    justifyContent: 'space-between',
    background: isDragging ? "lightgreen" : "#0093E9",
    backgroundImage: 'linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)',
    ...draggableStyle
});

const getListStyle = isDraggingOver => ({
    width: 390,
    margin: "auto",
    padding: 0,
});

export default function List() {
    const [data, setData] = useContext(DataContext);
    const [textvalue, setTexttvalue] = useState();

    const deleteItem = (id) => {
        setData(data.filter((x) => x.id !== id));
    };

    const handleEnd = (result) => {
        console.log(result, data);
        if (!result.destination) return;
        const items = Array.from(data);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
        setData(items);
    };

    const handleChange = (e) => {
        setTexttvalue(e.target.value);

    };

    return (
        <div className="list-app">
            <div className="App">
                <div>
                    <DragDropContext onDragEnd={handleEnd}>
                        <Droppable droppableId="to-dos">
                            {(provided, snapshot) => (
                                <ul {...provided.droppableProps} style={getListStyle(snapshot.isDraggingOver)} ref={provided.innerRef}>
                                    {data && data?.map((item, index) => (

                                        <Draggable key={item.id} draggableId={item.id.toString()} index={index}>
                                            {(provided, snapshot) => (
                                                <div
                                                    {...provided.draggableProps}
                                                    ref={provided.innerRef}
                                                    {...provided.dragHandleProps}
                                                    key={item.id}
                                                    style={getItemStyle(
                                                        snapshot.isDragging,
                                                        provided.draggableProps.style
                                                    )}
                                                >

                                                    <input
                                                        style={{ width: 120 }}
                                                        type="text"
                                                        onChange={(e) => handleChange(e)}
                                                        name="add"
                                                        defaultValue={item.name}
                                                    />

                                                    <button onClick={() => deleteItem(item.id)}>Delete</button>
                                                </div>
                                            )}
                                        </Draggable>
                                    ))}
                                    {provided.placeholder}
                                </ul>
                            )}
                        </Droppable>
                    </DragDropContext>
                </div>
            </div>
        </div>
    );
}
