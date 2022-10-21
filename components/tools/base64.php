<div class="accordion-item">
  <h2 class="accordion-header" id="headingBase64Accordion">
    <button
      class="accordion-button collapsed"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#collapseBase64Accordion"
      aria-expanded="false"
      aria-controls="collapseBase64Accordion"
    >
      <h5><?php echo B64_TITLE?></h5>
    </button>
  </h2>
  <div
    id="collapseBase64Accordion"
    class="accordion-collapse collapse"
    aria-labelledby="headingBase64Accordion"
    data-bs-parent="#general-accordion"
  >
    <div class="accordion-body">
      <div id="base64-intro-panel-id">
        <ul class="list-unstyled">
          <?php echoParagraphs(B64_INTRO); ?>
        </ul>
        <strong><?php echo STEPS?>:</strong>
        <ol>
          <?php echoParagraphs(B64_STEPS); ?>
        </ol>
      </div>
      <div id="base64-type-panel-id" class="col-md-5 col-md-4 col-xl-3">
        <label for="base64-type-id"><strong><?php echo B64_WHAT_DO_YOU_WANT_TO_DO?></strong></label>
        <select
          id="base64-type-id"
          class="form-select"
          aria-label="what-to-do"
        >
          <option value="encode" selected><?php echo B64_ENCODE?></option>
          <option value="decode"><?php echo B64_DECODE?></option>
        </select>
      </div>

      <div id="base64-text-panel-id">
        <label for="base64-text-id">
          <strong><?php echo B64_WHAT_TEXT?></strong>
        </label>
        <textarea
          class="form-control text-area"
          id="base64-text-id"
          rows="5"
        ></textarea>
      </div>

      <div id="base64-result-panel-id">
        <label for="base64-result-id">
          <strong><?php echo B64_RESULT?>: </strong>
        </label>
        <button
          id="copy-base64result-button"
          type="button"
          class="btn btn-outline-ct result-btn-sm click"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          title="<?php echo B64_COPY_TO_CLIPBOARD?>"
        >
          <i class="bi bi-files"></i>
        </button>
        <div class="result-panel">
          <samp
            class="text-result"
            id="base64-result-id"
            data-content-type="text"
          ></samp>
        </div>
      </div>
    </div>
  </div>
</div>