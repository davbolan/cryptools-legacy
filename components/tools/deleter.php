<div class="accordion-item">
  <h2 class="accordion-header" id="headingDeleterAccordion">
    <button
      class="accordion-button collapsed"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#collapseDeleterAccordion"
      aria-expanded="false"
      aria-controls="collapseDeleterAccordion"
    >
      <h5><?php echo DELETER_TITLE?></h5>
    </button>
  </h2>
  <div
    id="collapseDeleterAccordion"
    class="accordion-collapse collapse"
    aria-labelledby="headingDeleterAccordion"
    data-bs-parent="#general-accordion"
  >
    <div class="accordion-body">
      <div id="deleter-intro-panel-id">
        <ul class="list-unstyled">
          <?php echoParagraphs(DELETER_INTRO); ?>
        </ul>
        <strong><?php echo STEPS?>:</strong>
        <ol>
          <?php echoParagraphs(DELETER_STEPS); ?>
        </ol>
      </div>
      <div id="deleter-word-panel-id" class="col-md-5 col-md-4 col-xl-3">
        <label for="deleter-word-id">
          <strong><?php echo DELETER_WHAT_WORD_OR_CHAR?></strong>
        </label>
        <input type="input" class="form-control" id="deleter-word-id" />
      </div>

      <div id="deleter-text-panel-id">
        <label for="deleter-text-id">
          <strong><?php echo DELETER_WHAT_TEXT?></strong>
        </label>
        <textarea
          class="form-control text-area"
          id="deleter-text-id"
          rows="5"
        ></textarea>
      </div>
      <div id="deleter-result-panel-id">
        <label for="deleter-result-id">
          <strong><?php echo DELETER_RESULT?>: </strong>
        </label>
        <button 
          id="copy-deleter-result-button"
          type="button"
          class="btn btn-outline-ct result-btn-sm click"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          title="<?php echo DELETER_COPY_TO_CLIPBOARD?>"
        >
          <i class="bi bi-files"></i>
        </button>
        <div class="result-panel">
          <samp 
            class="text-result"
            id="deleter-result-id"
            data-content-type="text"
          ></samp>
        </div>
      </div>
    </div>
  </div>
</div>