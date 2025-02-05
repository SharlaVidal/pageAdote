"use client";

import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

export default function PostsTable({ posts, onDelete }) {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell>Categorias</TableCell>
            <TableCell>Porte</TableCell>
            <TableCell>Descrição</TableCell>
            <TableCell>Ações</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {posts.map((post) => (
            <TableRow key={post.id}>
              <TableCell>{post.name}</TableCell>
              <TableCell>{post.ageCategory}</TableCell>
              <TableCell>{post.size}</TableCell>
              <TableCell>{post.description}</TableCell>
              <TableCell>
                <Button color="error" onClick={() => onDelete(post.id)}>
                  Excluir
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
