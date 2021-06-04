class Tabelas {
    init(conexao) {
        this.conexao = conexao
        this.criarAtendimentos()
    }

    criarAtendimentos() {
        const sql = 'CREATE TABLE IF NOT EXISTS Atendimentos\n' +
            '  (\n' +
            '     id          INT NOT NULL auto_increment,\n' +
            '     cliente     VARCHAR(50) NOT NULL,\n' +
            '     pet         VARCHAR(20),\n' +
            '     servico     VARCHAR(20) NOT NULL,\n' +
            '     data        DATETIME NOT NULL, \n' +
            '     dataCriacao DATETIME NOT NULL, \n' +
            '     status      VARCHAR(20) NOT NULL,\n' +
            '     observacoes TEXT,\n' +
            '     PRIMARY KEY(id)\n' +
            '  ) '
        this.conexao.query(sql, (erro) => {
            if (erro) {
                console.log(erro)
            } else {
                console.log('showshowzqaao')
            }
        })
    }
}

module.exports = new Tabelas