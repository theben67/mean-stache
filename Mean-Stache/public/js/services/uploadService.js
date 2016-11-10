class uploadService {

    constructor($http) {
        this.$http = $http;
    }

    create(data) {
        return this.$http.post('/api/uploads', {
          description: data.description,
          image: data.image,
          user_id: data.user_id
        })
    }

    getAll() {
        return this.$http.get('/api/uploads')
    }

    getOne(id) {
        return this.$http.get('/api/uploads/' + id)
    }

    update(id, data) {
        return this.$http.put('/api/uploads/' + id, {
          description: data.description,
          image: data.image,
          user_id: data.user_id
        })
    }

    delete(id) {
        return this.$http.delete('/api/uploads/' + id)
    }

}
