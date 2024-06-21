import { fetchUserData } from '../../apis/userApi';

export default async function DataPage() {
  const data = await fetchUserData();

  return (
    <div>
      <h1>Data from API</h1>
      <p>{JSON.stringify(data)}</p>
    </div>
  );
}