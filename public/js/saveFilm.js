function saveToWatch(id) {
  axios.post("/api/films/save", { id }).then(data => {
    if(data.status == 200){
      alert(data.data)
      location.reload()
    }
  });
}

function deleteFormToWatch(id) {
  axios.delete(`/api/films/save/${id}`).then(data => {
    if(data.status == 200){
      alert(data.data);
      location.reload();
    }
  })
}