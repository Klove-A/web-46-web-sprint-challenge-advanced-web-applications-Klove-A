import axiosWithAuth from '../helpers/axiosWithAuth';

const fetchColorService = async () => {
  const res = await axiosWithAuth()
    .get("/colors");
  return res.data;
}

export default fetchColorService;