import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('bcic-subreport', 'Integration | Component | bcic subreport', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{bcic-subreport}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#bcic-subreport}}
      template block text
    {{/bcic-subreport}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
