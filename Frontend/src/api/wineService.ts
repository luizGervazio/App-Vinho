const BASE_URL = 'http://10.0.2.2:3000';

// GET - Listar todos os vinhos
export async function getAllWines() {
  try {
    const response = await fetch(`${BASE_URL}/wine`);
    if (!response.ok) throw new Error('Erro ao buscar vinhos');
    return await response.json();
  } catch (error) {
    console.error('Erro na API:', error);
    return [];
  }
}

// POST - Adicionar novo vinho
export async function createWine(data: any) {
  try {
    const response = await fetch(`${BASE_URL}/wine`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error('Erro ao criar vinho');
    return await response.json();
  } catch (error) {
    console.error('Erro ao criar vinho:', error);
    throw error;
  }
}

// DELETE - Remover vinho
export async function deleteWine(id: number) {
  try {
    const response = await fetch(`${BASE_URL}/wine/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) throw new Error('Erro ao excluir vinho');
    return true;
  } catch (error) {
    console.error('Erro ao deletar vinho:', error);
    throw error;
  }
}

// PUT - Atualizar vinho
export async function updateWine(id: number, data: any) {
  try {
    const response = await fetch(`${BASE_URL}/wine/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error('Erro ao atualizar vinho');
    return await response.json();
  } catch (error) {
    console.error('Erro ao atualizar vinho:', error);
    throw error;
  }
}
