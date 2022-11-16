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
      <span class="h5">
        <?php echo $i18n["DICT_TITLE"] ?>
      </span>
    </button>
  </h2>
  <div
    id="collapseDictAccordion"
    class="accordion-collapse collapse"
    aria-labelledby="headingDictAccordion"
    data-bs-parent="#general-accordion"
    data-tool="dictionary"
  >
    <div class="accordion-body container-fluid">
      <!-- 1. Paneles -->
      <div class="row">
        <div id="dict-intro-panel-id">
          <ul class="list-unstyled">
            <?php echoParagraphs($i18n["DICT_INTRO"]); ?>
          </ul>
          <strong> <?php echo $i18n["STEPS"] ?>: </strong>
          <ol>
            <?php echoParagraphs($i18n["DICT_STEPS"]); ?>
          </ol>
        </div>

        <div id="select-operation-panel-id" class="col-lg- mb-1">
          <div class="row">
            <label for="dict-list-id">
              <strong>
                <?php echo $i18n["DICT_DO_YOU_WANT_ENCODE_OR_DECODE"] ?>
              </strong>
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
                  <?php echo $i18n["DICT_ENCODE"] ?>
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
                  <?php echo $i18n["DICT_DECODE"] ?>
                </label>
              </div>
            </div>
          </div>
        </div>

        <div id="dict-list-panel-id" class="col-lg-6">
          <div class="row">
            <label for="dict-list-id">
              <strong>
                <?php echo $i18n["DICT_LOAD_JSON_OR_MANUAL"] ?>
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
                <?php echo $i18n["DICT_LOAD_JSON_BTN"] ?>
                &nbsp;<i class="bi bi bi-upload"></i>
              </button>
            </div>
          </div>
          <div class="mt-2">
            <textarea
              class="form-control mt-2 dict-panel text-area with-scrollbar"
              id="dict-json-content"
              rows="7"
            ></textarea>
          </div>
        </div>

        <div id="dict-text-panel-id" class="col-lg-6">
          <div class="row">
            <label for="dict-text-id">
              <strong>
                <?php echo $i18n["DICT_LOAD_INPUT_OR_MANUAL"] ?>
              </strong>
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
                <?php echo $i18n["DICT_LOAD_INPUT_FILE_BTN"] ?>
                &nbsp;<i class="bi bi bi-upload"></i>
              </button>
            </div>
          </div>
          <div class="mt-2">
            <textarea
              class="form-control dict-panel with-scrollbar"
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
            <?php echo $i18n["DICT_TRANSFORM_BTN"] ?>
            &nbsp;<i class="bi bi-hammer"></i>
          </button>
        </div>
      </div>
      <!-- 2. END -->

      <!-- 3. Resultado -->
      <div class="row mt-2">
        <div id="dict-result-panel-id">
          <label for="dict-result-id">
            <strong> <?php echo $i18n["DICT_RESULT"] ?>: </strong>
          </label>
          <button
            id="copy-dict-result-button"
            type="button"
            class="btn btn-outline-ct result-btn-sm"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="<?php echo $i18n['DICT_COPY_TO_CLIPBOARD'] ?>"
            disabled
          >
            <i class="bi bi-files"></i>
          </button>
          <button
            id="download-dict-result-button"
            type="button"
            class="btn btn-outline-ct result-btn-sm download-output-dict"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="<?php echo $i18n['DICT_DOWNLOAD_DICT'] ?>"
            disabled
          >
            <i class="bi bi-download"></i>
          </button>
          <div class="result-panel with-scrollbar">
            <samp
              class="text-result"
              id="dict-result-id"
              data-content-type="text"
            ></samp>
            <a
              style="display: none"
              id="output-dict-download-link"
              href="#"
              download="result.json"
              ><button id="output-dict-download-button"></button>
            </a>
          </div>
        </div>
      </div>
      <!-- 3. END -->
    </div>
  </div>
</div>
