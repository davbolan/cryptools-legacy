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
      <span class="h5">
        <?php echo $i18n["BUILDER_TITLE"] ?>
      </span>
    </button>
  </h2>
  <?php include ROOT_COMPONENTS_MODALS_PATH . '/builder-result.html' ?>
  <div
    id="collapseDictbuilderAccordion"
    class="accordion-collapse collapse"
    aria-labelledby="headingDictbuilderAccordion"
    data-bs-parent="#general-accordion"
    data-tool="builder"
  >
    <div class="accordion-body">
      <div id="dictbuilder-intro-panel-id">
        <ul class="list-unstyled">
          <?php echoParagraphs($i18n["BUILDER_INTRO"]); ?>
        </ul>
        <strong> <?php echo $i18n["STEPS"] ?>: </strong>
        <ol>
          <?php echoParagraphs($i18n["BUILDER_STEPS"]); ?>
        </ol>
      </div>
      <div id="separator-word-panel-id" class="col-md-6 col-md-6 col-xl-6">
        <label for="separator-word-id">
          <strong>
            <?php echo $i18n["BUILDER_WHAT_SEPARATOR"] ?>
          </strong>
        </label>
        <div class="row" id="separator-word-id">
          <div class="col-12 col-md-6 my-1">
            <select
              id="separator-list"
              class="form-select dict-builder"
              data-event-type="change"
            >
              <option value=""><?php echo $i18n["BUILDER_CHAR_TO_CHAR"] ?></option> 
              <option value=" "><?php echo $i18n["BUILDER_SPACE"] ?> ( &nbsp; )</option> 
              <option value="."><?php echo $i18n["BUILDER_DOT"] ?> ( . )</option> 
              <option value=","><?php echo $i18n["BUILDER_COMMA"] ?> ( , )</option> 
              <option value=":"><?php echo $i18n["BUILDER_COLON"] ?> ( : )</option> 
              <option value="*"><?php echo $i18n["BUILDER_ASTERISK"] ?> ( * )</option> 
              <option value="customOption"> <?php echo $i18n["BUILDER_CUSTOM"] ?></option> 
            </select>
          </div>
          <div class="col-12 col-md-6 my-1">
            <input type="input" id="separator-custom" class="form-control d-none
            dict-builder" placeholder="<?php echo $i18n["BUILDER_SET_CUSTOM"] ?>"
            data-event-type="keyup" />
          </div>
        </div>
      </div>
      <div id="dictbuilder-list-panel-id">
        <label for="dictbuilder-list-id">
          <strong>
            <?php echo $i18n["BUILDER_WHAT_TEXT_TO_USE"] ?>
          </strong>
        </label>
        <textarea
          class="form-control dict-builder text-area keyup with-scrollbar"
          id="dictbuilder-list-id"
          rows="5"
          data-event-type="keyup"
        ></textarea>
        <?php include ROOT_COMPONENTS_UI_PATH . '/default-dict.php' ?>
      </div>
      <div id="dictbuilder-result-panel-id">
        <label for="dictbuilder-result-id">
          <strong> <?php echo $i18n["BUILDER_RESULT"] ?>: </strong>
        </label>

        <button
          id="redo-dictbuilder-button"
          type="button"
          class="btn btn-outline-ct result-btn-sm dict-builder"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          title="<?php echo $i18n['BUILDER_REDO_DICT'] ?>"
          data-event-type="click"
          disabled
        >
          <i class="bi bi-arrow-repeat"></i>
        </button>
        <div
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          title="<?php echo $i18n['BUILDER_OPEN_WINDOW'] ?>"
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
          class="btn btn-outline-ct result-btn-sm copy-dict"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          title="<?php echo $i18n['BUILDER_COPY_TO_CLIPBOARD'] ?>"
          data-event-type="click"
          disabled
        >
          <i class="bi bi-files"></i>
        </button>
        <button
          id="download-dictbuilder-button"
          type="button"
          class="btn btn-outline-ct result-btn-sm download-json-dict"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          title="<?php echo $i18n['BUILDER_DOWNLOAD_DICT'] ?>"
          data-event-type="click"
          disabled
        >
          <i class="bi bi-download"></i>
        </button>
        <div class="result-panel with-scrollbar">
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
        <p id="dict-lost-advisor" class="text-danger fw-bold d-none">
          <?php echo $i18n["BUILDER_LOST_DICT_ADVISOR"] ?>
        </p>
      </div>
    </div>
  </div>
</div>
