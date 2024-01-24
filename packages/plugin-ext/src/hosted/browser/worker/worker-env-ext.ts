// *****************************************************************************
// Copyright (C) 2019 Red Hat, Inc. and others.
//
// This program and the accompanying materials are made available under the
// terms of the Eclipse Public License v. 2.0 which is available at
// http://www.eclipse.org/legal/epl-2.0.
//
// This Source Code may also be made available under the following Secondary
// Licenses when the conditions for such availability set forth in the Eclipse
// Public License v. 2.0 are satisfied: GNU General Public License, version 2
// with the GNU Classpath Exception which is available at
// https://www.gnu.org/software/classpath/license.html.
//
// SPDX-License-Identifier: EPL-2.0 OR GPL-2.0-only WITH Classpath-exception-2.0
// *****************************************************************************

import { injectable } from '@theia/core/shared/inversify';
import { EnvExtImpl } from '../../../plugin/env';

/**
 * Worker specific implementation not returning any FileSystem details
 * Extending the common class
 */
@injectable()
export class WorkerEnvExtImpl extends EnvExtImpl {

    constructor() {
        super();
    }

    /**
     * Throw error for app-root as there is no filesystem in worker context
     */
    override get appRoot(): string {
        throw new Error('There is no app root in worker context');
    }

    get isNewAppInstall(): boolean {
        return false;
    }

}
