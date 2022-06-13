import React from "react";
import { TiDeleteOutline } from 'react-icons/ti'

export default function DiaryItem({ item, showModal, deleteItem }) {
  return (
    <div className="diary-row">
      <span onClick={() => showModal(item)}>{item.title}</span>
      <div>
        <span className="date">{item.date}</span>
        <TiDeleteOutline onClick={() => deleteItem(item.id)} className="delete" style={{ color: "red" }}/>
      </div>
    </div>
  );
}
