import React from 'react';

const RecoverPassword = () => (
  <main className="flex-fill">
    <div className="container">
      <div className="row justify-content-center">
        <form className="col-sm-10 col-md-8 col-lg-6">
          <h1>Recuperação de Senha</h1>

          <div className="form-floating mb-3">
            <input
              type="email"
              id="txtEmail"
              className="form-control"
              placeholder=" "
              autofocus
            />
            <label for="txtEmail">E-mail</label>
          </div>

          <button
            type="button"
            onclick="window.location.href='/confirmrecupsenha.html'"
            className="btn btn-lg btn-danger"
          >
            Recuperar Senha
          </button>

          <p className="mt-3">
            Ainda não é cadastrado? <a href="/cadastro.html">Clique aqui</a>{' '}
            para se cadastrar.
          </p>
        </form>
      </div>
    </div>
  </main>
);

export default RecoverPassword;
