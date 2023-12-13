import { createSlice ,createAsyncThunk } from "@reduxjs/toolkit";

const initialState={
    users:[]
}

export const postUserAsyncRegister = createAsyncThunk(
	'users/userasync',
	async (payload) => {
		const resp = await fetch('http://localhost:4000/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ name: payload.name ,email:payload.email,passwod:payload.passwod }),
		});

		if (resp.ok) {
			const users = await resp.json();
			return { users};
		}
	}
);
export const postUserAsyncLogin = createAsyncThunk(
	'users/userasync',
	async (payload) => {
		const resp = await fetch('http://localhost:4000/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({email:payload.email,passwod:payload.passwod }),
		});

		if (resp.ok) {
			const users = await resp.json();
			return { users};
		}
	}
);

export const LogoutAsync = createAsyncThunk(
    'todos/logoutAsync',
    async (payload) => {
      const resp = await fetch("http://localhost:4000/logout", {
        method: 'DELETE',
      });
  
      if (resp.ok) {
        return { id: payload.id };
      }
    }
  );