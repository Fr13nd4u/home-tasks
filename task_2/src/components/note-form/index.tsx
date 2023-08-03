import * as React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { INote } from "../../types";

import { addNote, editNote } from "../../redux/slices/notes";
import { Button } from "../shared";

interface NoteFormProps {
  note?: INote | null;
  setModalActive?: () => void;
}

export const NoteForm: React.FC<NoteFormProps> = ({ note, setModalActive }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = React.useState({
    category: note?.category || "Task",
    content: note?.content || "",
    dates: note?.dates || "",
  });

  const handleSaveNote = () => {
    const { category, content, dates } = formData;

    if (!category || !content || !dates) {
      return;
    }

    if (note) {
      const editedNote: INote = {
        ...note,
        category,
        content,
        dates,
      };

      dispatch(editNote(editedNote));
      setModalActive(false);
    } else {
      const newNote: INote = {
        id: Date.now().toString(),
        time: new Date().toISOString(),
        content,
        category,
        dates,
        archived: false,
      };

      dispatch(addNote(newNote));
    }

    setFormData({
      category: "Task",
      content: "",
      dates: "",
    });
  };

  return (
    <FormWrapper id="add-note-form">
      <h2>{note ? "Edit Note" : "Add Note"}</h2>
      <InputLabel>
        Category:
        <SelectInput
          value={formData.category}
          onChange={(e) =>
            setFormData({ ...formData, category: e.target.value })
          }
        >
          <option value="Task">Task</option>
          <option value="Idea">Idea</option>
          <option value="Quote">Quote</option>
          <option value="Random Thought">Random Thought</option>
        </SelectInput>
      </InputLabel>
      <InputLabel>
        Content:
        <TextInput
          type="text"
          value={formData.content}
          onChange={(e) =>
            setFormData({ ...formData, content: e.target.value })
          }
        />
      </InputLabel>
      <InputLabel>
        Dates:
        <DatePickerWrapper>
          <DatePicker
            selected={formData.dates ? new Date(formData.dates) : null}
            onChange={(newDates: { toISOString: () => string }) =>
              setFormData({
                ...formData,
                dates: newDates ? newDates.toISOString() : "",
              })
            }
          />
        </DatePickerWrapper>
      </InputLabel>
      <Button onClick={handleSaveNote}>
        {note ? "Save Changes" : "Add Note"}
      </Button>
    </FormWrapper>
  );
};

export default NoteForm;

const FormWrapper = styled.div`
  display: flex;
  margin: 3rem 0;
  background: #fff;
  padding: 2rem;
  border-radius: 12px;
  align-items: baseline;
  gap: 40px;
`;

const InputLabel = styled.label`
  flex: 1;
  display: flex;
  margin-right: 10px;
  align-items: baseline;
  gap: 10px;
`;

const SelectInput = styled.select`
  flex: 1;
  padding: 10px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TextInput = styled.input`
  flex: 1;
  padding: 10px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const DatePickerWrapper = styled.div`
  display: inline-block;

  input {
    flex: 1;
    padding: 10px;
    margin-right: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
`;
