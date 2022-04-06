'use strict';

/**
 * carpool service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::carpool.carpool');
