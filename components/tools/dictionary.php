<div class="accordion-item">
  <h2 class="accordion-header" id="headingDictAccordion">
    <button
      class="accordion-button collapsed"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#collapseDictAccordion"
      aria-expanded="false"
      aria-controls="collapseDictAccordion"
    >
      <h5>Dictionary</h5>
    </button>
  </h2>
  <div
    id="collapseDictAccordion"
    class="accordion-collapse collapse"
    aria-labelledby="headingDictAccordion"
    data-bs-parent="#general-accordion"
  >
    <div class="accordion-body container">
      <!-- 1. Paneles -->
      <div class="row">
        <div id="select-operation-panel-id" class="col-lg- mb-1">
          <div class="row">
            <label for="dict-list-id">
              <strong>¿Quieres codificar o decodificar? </strong>
            </label>
            <div class="col">
              <div class="form-check">
                <input
                  type="radio"
                  id="flexRadioCoderDict"
                  name="flexRadioDictOperation"
                  class="form-check-input"
                  value="encode"
                  checked
                />
                <label class="form-check-label" for="flexRadioCoderDict">
                  Codificar
                </label>
              </div>

              <div class="form-check">
                <input
                  type="radio"
                  id="flexRadioDecoderDict"
                  name="flexRadioDictOperation"
                  class="form-check-input"
                  value="decode"
                />
                <label class="form-check-label" for="flexRadioDecoderDict">
                  Decodificar
                </label>
              </div>
            </div>
          </div>
        </div>

        <div id="dict-list-panel-id" class="col-lg-6">
          <div class="row">
            <label for="dict-list-id">
              <strong
                >Carga un diccionario desde un fichero (Formato JSON) o indícalo
                manualmente
              </strong>
            </label>
          </div>
          <div class="row">
            <div class="col">
              <input
                hidden
                type="file"
                class="form-control"
                id="dict-file-input"
              />
              <button
                class="btn btn-primary"
                id="dict-file-button"
                type="button"
              >
                Cargar fichero &nbsp;<i class="bi bi bi-upload"></i>
              </button>
            </div>
          </div>
          <div class="mt-2">
            <textarea
              class="form-control mt-2 dict-panel text-area"
              id="dict-json-content"
              rows="7"
            ></textarea>
          </div>
        </div>

        <div id="dict-text-panel-id" class="col-lg-6">
          <div class="row">
            <label for="dict-text-id">
              <strong
                >Carga el texto a tratar desde un fichero o indícalo
                manualmente</strong
              >
            </label>
          </div>
          <div class="row">
            <div class="col">
              <input
                hidden
                type="file"
                class="form-control"
                id="text-file-input"
              />
              <button
                class="btn btn-primary"
                id="text-file-button"
                type="button"
              >
                Cargar texto &nbsp;<i class="bi bi bi-upload"></i>
              </button>
            </div>
          </div>
          <div class="mt-2">
            <textarea
              class="form-control dict-panel"
              id="text-content"
              rows="7"
            ></textarea>
          </div>
        </div>
      </div>
      <!-- 1. END -->

      <!-- 2. Botón generar -->
      <div class="row mt-2">
        <div class="col">
          <button
            class="btn btn-primary col-3 col-lg-2"
            id="transform-button"
            type="button"
            disabled
          >
            Transformar &nbsp;<i class="bi bi-hammer"></i>
          </button>
        </div>
      </div>
      <!-- 2. END -->

      <!-- 3. Resultado -->
      <div class="row mt-2">
        <div id="dict-result-panel-id">
          <label for="dict-result-id">
            <strong>Resultado: </strong>
          </label>
          <button
            id="copy-dict-result-button"
            type="button"
            class="btn btn-outline-ct result-btn-sm click"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Copiar resultado al cortapapeles"
          >
            <i class="bi bi-files"></i>
          </button>
          <div class="result-panel">
            <samp
              class="text-result"
              id="dict-result-id"
              data-content-type="text"
            ></samp>
          </div>
        </div>
      </div>
      <!-- 3. END -->
    </div>
  </div>
</div>
