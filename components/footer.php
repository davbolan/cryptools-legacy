<footer>
  <nav class="text-center text-white footer-cryptools">
    <div class="container">
      <a
        class="btn btn-link btn-lg text-light m-1 fs-3"
        href="https://www.linkedin.com/in/davbolan/"
        target="_blank"
        ><i class="bi bi-linkedin"></i>
      </a>
      <a
        class="btn btn-link btn-lg text-light m-1 fs-3"
        href="https://github.com/davbolan/cryptools"
        target="_blank"
        ><i class="bi bi-github"></i>
      </a>
    </div>

    <div class="container-fluid text-light p-3 author-panel">
      <div class="row">
        <div class="offset-4 col-4">
          <div class="d-inline-block">
            <img
              src="/assets/logo.png"
              width="45"
              class="me-2 mb-4"
              alt="logo"
            />
          </div>
          <div class="d-inline-block">
            <ul class="list-unstyled">
              <li>
                <a
                  id="web-link"
                  class="text-light ml-5"
                  href="<?php echo $web_root ?>"
                  target="_blank"
                >
                  <?php echo $web_url ?>
                </a>
              </li>
              <li>Created by: <strong>davbolan</strong></li>
            </ul>
          </div>
        </div>
        <div class="offset-3 col-1 align-self-end">
          <span
            id="open-crypto-info-modal-button"
            class="h5 color-ct-blue-super-light text-end"
            data-bs-toggle="modal"
            data-bs-target="#crypto-info-modal"
          >
          <?php echo DONATE_ME ?>
          </span>
        </div>
      </div>
    </div>
  </nav>
</footer>
