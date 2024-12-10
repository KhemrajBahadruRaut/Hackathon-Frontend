/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PatientInformationDto } from '../models/PatientInformationDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PatientInformationControllerService {
    /**
     * @param lastName
     * @param dateOfBirth
     * @param citizenshipNumber
     * @returns any OK
     * @throws ApiError
     */
    public static get(
        lastName: string,
        dateOfBirth: string,
        citizenshipNumber: string,
    ): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/patient-information',
            query: {
                'lastName': lastName,
                'dateOfBirth': dateOfBirth,
                'citizenshipNumber': citizenshipNumber,
            },
        });
    }
    /**
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static save(
        requestBody: PatientInformationDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/patient-information',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
