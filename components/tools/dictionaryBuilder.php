<div class="accordion-item">
  <h2 class="accordion-header" id="headingDictbuilderAccordion">
    <button
      class="accordion-button collapsed"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#collapseDictbuilderAccordion"
      aria-expanded="false"
      aria-controls="collapseDictbuilderAccordion"
    >
      <h5><?php echo BUILDER_TITLE?></h5>
    </button>
  </h2>
  <div
    id="collapseDictbuilderAccordion"
    class="accordion-collapse collapse"
    aria-labelledby="headingDictbuilderAccordion"
    data-bs-parent="#general-accordion"
  >
    <div class="accordion-body">
     <div id="dictbuilder-intro-panel-id">
        <ul class="list-unstyled">
          <?php echoParagraphs(BUILDER_INTRO); ?>
        </ul>
        <strong><?php echo STEPS?>:</strong>
        <ol>
          <?php echoParagraphs(BUILDER_STEPS); ?>
        </ol>
      </div>
      <div id="separator-word-panel-id" class="col-md-6 col-md-6 col-xl-6">
        <label for="separator-word-id">
          <strong><?php echo BUILDER_WHAT_SEPARATOR?></strong>
        </label>
        <div class="row" id="separator-word-id">
          <div class="col-12 col-md-6 my-1">
            <select id="separator-list" class="form-select dict-builder change">
              <option value=""><?php echo BUILDER_CHAR_TO_CHAR?></option>
              <option value=""><?php echo BUILDER_SPACE?> ( &nbsp; )</option>
              <option value="."><?php echo BUILDER_DOT?> ( . )</option>
              <option value=","><?php echo BUILDER_COMMA?> ( , )</option>
              <option value=":"><?php echo BUILDER_COLON?> ( : )</option>
              <option value="*"><?php echo BUILDER_ASTERISK?> ( * )</option>
              <option value="customOption"><?php echo BUILDER_CUSTOM?></option>
            </select>
          </div>
          <div class="col-12 col-md-6 my-1">
            <input
              type="input"
              id="separator-custom"
              class="form-control d-none dict-builder keyup"
              placeholder="<?php echo BUILDER_SET_CUSTOM?>"
            />
          </div>
        </div>
      </div>
      <div id="dictbuilder-list-panel-id">
        <label for="dictbuilder-list-id">
          <strong><?php echo BUILDER_WHAT_TEXT_TO_USE?></strong>
        </label>
        <textarea
          class="form-control dict-builder text-area keyup"
          id="dictbuilder-list-id"
          rows="5"
        ></textarea>
        <button id="add-default-dict" class="button-text" ><?php echo BUILDER_ADD_DEFAULT_DICT?></button>
      </div>
      <div id="dictbuilder-result-panel-id">
        <label for="dictbuilder-result-id">
          <strong><?php echo BUILDER_RESULT?>: </strong>
        </label>

        <button
          id="redo-dictbuilder-button"
          type="button"
          class="btn btn-outline-ct result-btn-sm dict-builder click"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          title="<?php echo BUILDER_REDO_DICT?>"
          disabled
        >
          <i class="bi bi-arrow-repeat"></i>
        </button>
        <div
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          title="<?php echo BUILDER_OPEN_WINDOW?>"
          class="wrap"
        >
          <button
            id="open-modal-button"
            type="button"
            class="btn btn-outline-ct result-btn-sm"
            data-bs-toggle="modal"
            data-bs-target="#dictbuilder-json-result-modal"
            disabled
          >
            <i class="bi bi-box-arrow-up-right"></i>
          </button>
        </div>
        <button
          id="copy-dictbuilder-button"
          type="button"
          class="btn btn-outline-ct result-btn-sm copy-dict click"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          title="<?php echo BUILDER_COPY_TO_CLIPBOARD?>"
          disabled
        >
          <i class="bi bi-files"></i>
        </button>
        <button
          id="download-dictbuilder-button"
          type="button"
          class="btn btn-outline-ct result-btn-sm download-json-dict click"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          title="<?php echo BUILDER_DOWNLOAD_DICT?>"
          disabled
        >
          <i class="bi bi-download"></i>
        </button>
        <div class="result-panel">
          <samp class="text-result" id="dictbuilder-result-id"></samp>
          <textarea
            id="dictbuilder-textarea-result-id"
            data-content-type="val"
            hidden
          ></textarea>
          <a
            style="display: none"
            id="result-download-link"
            href="#"
            download="result.json"
            ><button id="result-download-button"></button>
          </a>
        </div>
        <p id="dict-lost-advisor" class="text-danger fw-bold d-none"><?php echo BUILDER_LOST_DICT_ADVISOR?></p>

        <!-- Modal -->
        <div
          class="modal"
          id="dictbuilder-json-result-modal"
          tabindex="-1"
          aria-labelledby="dictbuilder-json-result-modal-label"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-scrollable modal-lg">
            <div class="modal-content">
              <div class="modal-header">
                <h5
                  class="modal-title"
                  id="dictbuilder-json-result-modal-label"
                >
                <?php echo BUILDER_RESULT?>
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body code">
                <pre class="code" id="json-modal-content"></pre>
              </div>
              <div class="modal-footer">
                <button
                  id="copy-dictbuilder-modal-button"
                  type="button"
                  class="btn btn-primary copy-dict click"
                >
                <?php echo BUILDER_COPY_TO_CLIPBOARD?>&nbsp;<i class="bi bi-files"></i>
                </button>
                <button
                  id="download-dictbuilder-modal-button"
                  type="button"
                  class="btn btn-primary download-json-dict click"
                >
                <?php echo BUILDER_DOWNLOAD_DICT?>&nbsp;<i class="bi bi-box-arrow-up-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
