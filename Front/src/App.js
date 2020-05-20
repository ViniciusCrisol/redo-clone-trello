import React, { useState, useEffect } from 'react';
import { MdDelete } from 'react-icons/md';
import { Form, Input, Textarea } from '@rocketseat/unform';

import GloabalStyles from './styles/global';
import { Container, ContainerItem, Header, Modal } from './styles/styles';

import api from './services/api';

function App() {
  const [items, setItem] = useState([]);
  const [open, setOpen] = useState(true);

  async function loadItens() {
    const response = await api.get('/');

    setItem(response.data);
  }

  async function handleDelete(id) {
    await api.delete(`/${id}`);
  }

  async function handleCreate(data) {
    await api.post('/', data);
    setOpen(false);
  }

  function handleModal() {
    if (open === false) setOpen(true);
    else setOpen(false);
  }

  useEffect(() => {
    loadItens();
  }, [items]);

  return (
    <>
      <GloabalStyles />

      {open && (
        <Modal>
          <Form onSubmit={handleCreate}>
            <Input name="title" placeholder="Título" />
            <Textarea name="description" placeholder="Descrição" />
            <div>
              <button type="button" onClick={() => handleModal()}>
                Cancelar
              </button>
              <button type="submit">Criar</button>
            </div>
          </Form>
        </Modal>
      )}

      <Header>
        <p>projectNotes</p>
        <button type="button" onClick={() => handleModal()}>
          nova anotação
        </button>
      </Header>
      <Container>
        {items.map((item) => (
          <ContainerItem key={item._id}>
            <h1>{item.title}</h1>
            <div>
              <p>{item.description}</p>
            </div>
            <footer>
              <button type="button" onClick={() => handleDelete(item._id)}>
                <MdDelete color="#ff5151" size={22} />
              </button>
            </footer>
          </ContainerItem>
        ))}
      </Container>
    </>
  );
}

export default App;
