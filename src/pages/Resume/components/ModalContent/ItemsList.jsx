import React from "react";
import {
  TransitionGroup,
  CSSTransition,
  SwitchTransition,
} from "react-transition-group";

import { ItemInput, AddItemInput } from "./components";
import Button from "../Button";
import Overlay from "../../../../components/Overlay";

const ItemsList = ({
  itemComponent,
  addItemComponent,
  items,
  size,
  onAddItem,
  onRemoveItem,
  onChangeItem,
  editable,
  componentProps,
}) => {
  const [inputOpened, setInputOpened] = React.useState(false);

  return (
    <div>
      <TransitionGroup>
        {items?.map((item) => (
          <CSSTransition key={item.id} timeout={400} classNames="item">
            <>
              <ItemInput
                size={size}
                item={item}
                onRemove={onRemoveItem}
                onChange={(value) => onChangeItem({ ...item, text: value })}
                removeable
                editable={editable}
              />
              {itemComponent &&
                React.createElement(itemComponent, {
                  item,
                  ...componentProps,
                })}
            </>
          </CSSTransition>
        ))}
      </TransitionGroup>
      <SwitchTransition mode="out-in">
        <CSSTransition
          key={inputOpened}
          timeout={200}
          classNames="accordion"
          unmountOnExit
        >
          {inputOpened ? (
            addItemComponent ? (
              React.createElement(addItemComponent, {
                onClose: () => setInputOpened(false),
                onAddItem,
              })
            ) : (
              <AddItemInput
                size={size}
                onClose={() => setInputOpened(false)}
                onAddItem={onAddItem}
              />
            )
          ) : (
            <Button
              size={Number(size) + 1}
              type="add"
              onClick={() => setInputOpened(true)}
            />
          )}
        </CSSTransition>
      </SwitchTransition>
      {inputOpened && (
        <Overlay
          state={inputOpened}
          clickHadler={() => {
            setInputOpened(false);
          }}
        />
      )}
    </div>
  );
};

export default ItemsList;
