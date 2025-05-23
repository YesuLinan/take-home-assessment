import type { Contact } from "../../src/Types/Contact";

const API_BASE = "http://localhost:3000/api/contacts";

export async function addContact(contact: Omit<Contact, "id">) {
  console.log("Adding contact:", contact);
  const res = await fetch(API_BASE, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(contact),
  });
  return res.json();
}

export async function updateContact(contact: Contact) {
  console.log("Updating contact:", contact);
  const res = await fetch(`${API_BASE}/${contact.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(contact),
  });
  return res.json();
}

export async function getContacts(): Promise<Contact[]> {
  console.log("Fetching contacts...");
  const res = await fetch(API_BASE);
  if (!res.ok) {
    throw new Error(`Failed to fetch contacts: ${res.statusText}`);
  }
  const data = await res.json();
  return data.map((contact: any) => ({
    ...contact,
    dateOfBirth: contact.dateOfBirth ? new Date(contact.dateOfBirth) : null,
  }));
}

export async function deleteContact(id: string) {
  console.log("Deleting contact with id:", id);
  const res = await fetch(`${API_BASE}/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) {
    throw new Error(`Failed to delete contact: ${res.statusText}`);
  }
  return res.json();
}