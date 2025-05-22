import Joi from 'joi';

//medication schema
export const createMedicationSchema = Joi.object({
  Name: Joi.string().required().messages({
    'string.base': 'Name must be a string.',
    'any.required': 'Medication name is required.',
  }),
  Description: Joi.string().required().messages({
    'string.base': 'Description must be a string.',
    'any.required': 'Description is required.',
  }),
  Image: Joi.string().uri().optional().messages({
    'string.uri': 'Image must be a valid URL.',
  }),
  StockQuantity: Joi.number().integer().optional().messages({
    'number.base': 'Stock Quantity must be a number.',
  }),
  StockLimit: Joi.number().integer().optional().messages({
    'number.base': 'Stock Limit must be a number.',
  }),
  ManufactureDate: Joi.date().optional().messages({
    'date.base': 'Manufacture Date must be a valid date.',
  }),
  ExpirationDate: Joi.date().optional().messages({
    'date.base': 'Expiration Date must be a valid date.',
  }),
  IsAvailable: Joi.boolean().required().messages({
    'boolean.base': 'IsAvailable must be true or false.',
    'any.required': 'Availability status is required.',
  }),
});

export const updateMedicationSchema = createMedicationSchema.fork(
  Object.keys(createMedicationSchema.describe().keys),
  (schema) => schema.optional()
);

//patient schema
export const createPatientSchema = Joi.object({
  Fullname: Joi.string().required().messages({
    'any.required': 'Fullname is required.',
  }),
  Mobile: Joi.string().required().messages({
    'any.required': 'Mobile number is required.',
  }),
  NationalID: Joi.string().optional(),
  Email: Joi.string().email().optional().messages({
    'string.email': 'Email must be valid.',
  }),
});

export const updatePatientSchema = createPatientSchema.fork(
  Object.keys(createPatientSchema.describe().keys),
  (schema) => schema.optional()
);

//custom inquiry schema
export const createCustomInquirySchema = Joi.object({
  PatientId: Joi.string().required().messages({
    'any.required': 'Patient ID is required.',
  }),
  ImageUpload: Joi.string().uri().optional().messages({
    'string.uri': 'Image upload must be a valid URL.',
  }),
  Prescription: Joi.string().required().messages({
    'any.required': 'Prescription is required.',
  }),
  Description: Joi.string().required().messages({
    'any.required': 'Description is required.',
  }),
  Status: Joi.string().valid('pending', 'reviewed', 'completed').optional().messages({
    'any.only': 'Status must be either pending, reviewed, or completed.',
  }),
});

export const updateCustomInquirySchema = createCustomInquirySchema.fork(
  Object.keys(createCustomInquirySchema.describe().keys),
  (schema) => schema.optional()
);

//patient medication schema
export const createPatientMedicationSchema = Joi.object({
  PatientId: Joi.string().required().messages({
    'any.required': 'Patient ID is required.',
  }),
  MedicationId: Joi.string().required().messages({
    'any.required': 'Medication ID is required.',
  }),
  Quantity: Joi.number().integer().optional().messages({
    'number.base': 'Quantity must be a number.',
  }),
});

export const updatePatientMedicationSchema = createPatientMedicationSchema.fork(
  Object.keys(createPatientMedicationSchema.describe().keys),
  (schema) => schema.optional()
);

//pharmacy schema

export const createPharmacySchema = Joi.object({
  Name: Joi.string().required().messages({
    'any.required': 'Pharmacy name is required.',
  }),
  Content: Joi.string().required().messages({
    'any.required': 'Content is required.',
  }),
  PharmacyThumbnail: Joi.string().uri().optional().messages({
    'string.uri': 'Thumbnail must be a valid URL.',
  }),
  Location: Joi.string().optional(),
  Email: Joi.string().email().optional().messages({
    'string.email': 'Email must be valid.',
  }),
  Phone: Joi.string().optional(),
  Website: Joi.string().uri().optional().messages({
    'string.uri': 'Website must be a valid URL.',
  }),
  LicenseNumber: Joi.string().optional(),
});

export const updatePharmacySchema = createPharmacySchema.fork(
  Object.keys(createPharmacySchema.describe().keys),
  (schema) => schema.optional()
);

//user schema

export const createUserSchema = Joi.object({
  Fullname: Joi.string().required().messages({
    'any.required': 'Fullname is required.',
  }),
  Mobile: Joi.string().required().messages({
    'any.required': 'Mobile number is required.',
  }),
  Email: Joi.string().email().required().messages({
    'any.required': 'Email is required.',
    'string.email': 'Email must be valid.',
  }),
  Password: Joi.string().min(6).required().messages({
    'any.required': 'Password is required.',
    'string.min': 'Password must be at least 6 characters.',
  }),
  Role: Joi.string().valid('admin', 'staff', 'viewer').required().messages({
    'any.required': 'Role is required.',
    'any.only': 'Role must be admin, staff, or viewer.',
  }),
});

export const updateUserSchema = createUserSchema.fork(
  Object.keys(createUserSchema.describe().keys),
  (schema) => schema.optional()
);


//contact us schema

export const createContactMessageSchema = Joi.object({
  Fullname: Joi.string().required().messages({
    'any.required': 'Fullname is required.',
  }),
  Email: Joi.string().email().required().messages({
    'any.required': 'Email is required.',
    'string.email': 'Email must be valid.',
  }),
  Mobile: Joi.string().optional(),
  Message: Joi.string().required().messages({
    'any.required': 'Message content is required.',
  }),
});
