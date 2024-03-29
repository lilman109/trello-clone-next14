"use client";

import { cn } from "@/lib/utils";
import { ListWithCards } from "@/types";
import { CardForm, CardItem, ListHeader } from ".";
import { ElementRef, useRef, useState } from "react";
import { Draggable, Droppable } from "@hello-pangea/dnd";

interface ListItemProps {
  data: ListWithCards;
  index: number;
  isUpdateListLoading: boolean;
  isUpdateCardLoading: boolean;
}

export const ListItem = ({
  data,
  index,
  isUpdateListLoading,
  isUpdateCardLoading,
}: ListItemProps) => {
  const textAreaRef = useRef<ElementRef<"textarea">>(null);
  const [isEditing, setIsEditing] = useState(false);

  const disableEditing = () => {
    setIsEditing(false);
  };

  const enableEditing = () => {
    setIsEditing(true);
    setTimeout(() => {
      textAreaRef.current?.focus();
    });
  };

  return (
    <Draggable
      draggableId={data.id}
      index={index}
      isDragDisabled={
        isUpdateListLoading ? true : isUpdateCardLoading ? true : false
      }
    >
      {(provided) => (
        <li
          {...provided.draggableProps}
          ref={provided.innerRef}
          className="shrink-0 h-full w-[272px] select-none relative"
        >
          <div
            {...provided.dragHandleProps}
            className="w-full rounded-md bg-[#f1f2f4] shadow-md pb-2 relative"
          >
            <ListHeader onAddCard={enableEditing} data={data} />
            <Droppable droppableId={data.id} type="card">
              {/*droppableId is specific because theh drop area is at a specific list*/}
              {(provided) => (
                <ol
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className={cn(
                    "mx-1 px-1 py-0.5 flex flex-col gap-y-2",
                    data.cards.length > 0 ? "mt-2" : "mt-0",
                  )}
                >
                  {data.cards.map((card, index) => (
                    <CardItem index={index} key={card.id} data={card} />
                  ))}
                  {provided.placeholder}
                </ol>
              )}
            </Droppable>
            <CardForm
              listId={data.id}
              ref={textAreaRef}
              isEditing={isEditing}
              enableEditing={enableEditing}
              disableEditing={disableEditing}
            />
            {isUpdateListLoading || isUpdateCardLoading ? (
              <div className="absolute inset-0 bg-gray-200 opacity-50 rounded-md h-full"></div>
            ) : null}
          </div>
        </li>
      )}
    </Draggable>
  );
};
