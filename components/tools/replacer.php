<div class="accordion-item">
  <h2 class="accordion-header" id="headingReplacerAccordion">
    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
      data-bs-target="#collapseReplacerAccordion" aria-expanded="false" aria-controls="collapseReplacerAccordion">
      <span class="h5">
        <?php echo $i18n["REPLACER_TITLE"] ?>
      </span>
    </button>
  </h2>
  <div id="collapseReplacerAccordion" class="accordion-collapse collapse" aria-labelledby="headingReplacerAccordion"
    data-bs-parent="#general-accordion" data-tool="replacer">
    <div class="accordion-body">
      <div id="replacer-intro-panel-id">
        <ul class="list-unstyled">
          <?php echoParagraphs($i18n["REPLACER_INTRO"]); ?>
        </ul>
        <strong>
          <?php echo $i18n["STEPS"] ?>:
        </strong>
        <ol>
          <?php echoParagraphs($i18n["REPLACER_STEPS"]); ?>
        </ol>
      </div>
      <div id="replacer-word-panel-id" class="col-md-5 col-md-4 col-xl-3">
        <label for="replacer-word-id">
          <strong>
            <?php echo $i18n["REPLACER_WHAT_WORD_OR_CHAR"] ?>
          </strong>
        </label>
        <input type="input" class="form-control" id="replacer-word-id" />
      </div>
      <div id="replacer-text-panel-id">
        <label for="replacer-text-id">
          <strong>
            <?php echo $i18n["REPLACER_WHAT_TEXT"] ?>
          </strong>
        </label>
        <textarea class="form-control text-area with-scrollbar" id="replacer-text-id" rows="5"></textarea>
      </div>
      <div id="replacer-result-panel-id">
        <label for="replacer-result-id">
          <strong>
            <?php echo $i18n["REPLACER_RESULT"] ?>:
          </strong>
        </label>
        <button id="copy-replacer-result-button" type="button" class="btn btn-outline-ct result-btn-sm"
          data-bs-toggle="tooltip" data-bs-placement="top" title="<?php echo $i18n['REPLACER_COPY_TO_CLIPBOARD'] ?>"
          disabled>
          <i class="bi bi-files"></i>
        </button>
        <div class="result-panel with-scrollbar">
          <samp class="text-result" id="replacer-result-id" data-content-type="text"></samp>
        </div>
      </div>
    </div>
  </div>
</div>