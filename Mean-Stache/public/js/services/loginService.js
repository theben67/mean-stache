class loginService {

    constructor($http) {
        this.$http = $http;
    }

    create(data) {
        return this.$http.post('/api/logins', {
            description: data.description,
            pseudo: data.pseudo,
            mail: data.mail,
            news: data.news
        })
    }

    getAll() {
        return this.$http.get('/api/logins')
    }

    getOne(id) {
        return this.$http.get('/api/logins/' + id)
    }

    update(id, data) {
        return this.$http.put('/api/logins/' + id, {
          description: data.description,
          pseudo: data.pseudo,
          mail: data.mail,
          news: data.news
        })
    }

    delete(id) {
        return this.$http.delete('/api/logins/' + id)
    }

}
