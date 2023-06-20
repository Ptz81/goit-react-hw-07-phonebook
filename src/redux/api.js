const BASE_URL = "https://62584f320c918296a49543e7.mockapi.io"
export const fetchContacts = async () => {
  const data = await fetch(`${BASE_URL}/contacts`)
  return await data.json()
}
export const createContacts = async (data) => {
  const res = await fetch(`${BASE_URL}/contacts`, {
    body: JSON.stringify(data)
  })
  return await res.json()
}
export const deleteContacts = async (id) => {
  const res = await fetch(`${BASE_URL}/contacts/${id}`)
  return await res.json()
}
