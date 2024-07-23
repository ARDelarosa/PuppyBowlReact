const result = await response.json();
const data = result.data;
if (!response.ok || data.success) {
    throw new Error(`Failed to delete player with ID ${id}`);
}
return data;
