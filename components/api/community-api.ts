import {POST_SVC_URL} from '../constants';

const COMMUNITY_API_URL = POST_SVC_URL + '/community/v1';

export interface MyCommunityForProfileScreen {
    communityId: string;
    logoUrlOutput: string;
    name: string;
}

export interface CommunityInviteCandidate {
    userId: string;
    fullName: string;
    profilePicUrl: string;
    username: string;
    bio: string;
}

export enum ClubhouseCommunityMemberRole {
    NONE = 'NONE',
    FOUNDER = 'FOUNDER',
    MANAGER = 'MANAGER',
    MEMBER = 'MEMBER',
}

export enum ClubhouseCommunityMemberJoinStatus {
    NONE = 'NONE',
    INVITED = 'INVITED', // when member was invited by a manager/founder
    REJECTED = 'REJECTED', // when invited person rejects invitation
    JOINED = 'JOINED',
    LEFT = 'LEFT', // When member left on own will
    REMOVED = 'REMOVED', // when member was removed by a manager/founder
}

export enum ClubhouseCommunityStatus {
    ACTIVE = 'ACTIVE',
    INACTIVE = 'INACTIVE',
}

export interface ClubhouseCommunity {
    communityId: string;
    name: string;
    handle: string;
    logoUrlSource: string;
    logoUrlOutput: string;
    description: string;
    createdAt: number;
    createdBy: string;
    currentActive: boolean;
    status: ClubhouseCommunityStatus;
}

export interface ClubhouseCommunityPrefs {
    communityId: string;
    section: string;
    subSection: string;
    data: string;
    createdBy: string;
    createdAt: number;
    currentActive: boolean;
}

export interface ClubhouseCommunityVertical {
    communityId: string;
    verticalId: string;
    verticalName: string;
    topicId: string;
    topicName: string;
    currentActive: boolean;
    createdAt: number;
    createdBy: string;
}

export interface ClubhouseCommunityMember {
    communityId: string;
    memberId: string;
    invitedBy: string;
    joinedAt: number;
    createdAt: number;
    role: ClubhouseCommunityMemberRole;
    joinStatus: ClubhouseCommunityMemberJoinStatus;
    currentActive: boolean;
}

export interface ClubhouseCommunityExtended {
    followerUserId: string;
    membership: ClubhouseCommunityMember;
    community: ClubhouseCommunity;
    memberCount: number;
    followerCount: number;
    prefs: ClubhouseCommunityPrefs[];
    verticals: ClubhouseCommunityVertical[];
    following: boolean;
}

export interface ClubhouseCommunityUpdateRequest {
    communityId: string;
    createdBy: string;
    name: string;
    handle: string;
    description: string;
    logoUrlSource: string;
    prefs: object;
    verticals: ClubhouseCommunityCreateRequestVerticals[];
}

export interface ClubhouseCommunityCreateRequestVerticals {
    topicId: string;
    verticalId: string;
}

export interface CommunityLogoUploadResponse {
    s3Url: string;
    publicUrl: string;
}

export interface ClubhouseCommunityFollow {
    communityId: string;
    followerUserId: string;
    currentFollowing: boolean;
    currentActive: boolean;
    createdAt: number;
}

export interface CommunityMemberProfileWithFollowingData {
    followerUserId: string;
    profile: CommunityMemberProfile;
    following: boolean;
}

export interface CommunityMemberProfile {
    userId: string;
    username: string;
    fullName: string;
    profilePicUrl: string;
    bio: string;
}

export interface DeleteCommunityRequest {
    communityId: string;
    userId: string;
}

export interface CommunityInviteStatus {
    joinStatus: ClubhouseCommunityMemberJoinStatus;
    invitedByUserProfile: CommunityInvitedByProfile;
}

export interface CommunityInvitedByProfile {
    userId: string;
    fullName: string;
    profilePicUrl: string;
}

export interface CommunityJoinAcceptRequest {
    userId: string;
    communityId: string;
    rejected: boolean;
}

export interface ClubhouseCommunityForExplore {
    followerId: string;
    following: boolean;
    community: ClubhouseCommunity;
    memberCount: number;
    followerCount: number;
}

export interface CommunitySearchResult {
    community: ClubhouseCommunity;
    followerCount: number;
    memberCount: number;
}

export interface CommunityLeaveRequest {
    communityId: string;
    userId: string;
}

export interface CreateCommunityStatus {
    userId: string;
    canCreate: boolean;
    reasonStmt: string;
}

export const getAllCommunities = (
    userId: string,
    limit: number,
    offset: number,
) => {
    const url =
        COMMUNITY_API_URL +
        `/all?userId=${userId}&limit=${limit}&offset=${offset}`;
    return fetch(url, {method: 'GET'});
};

export const getMemberOf = (userId: string, limit: number, offset: number) => {
    const url =
        COMMUNITY_API_URL +
        `/memberof?userId=${userId}&limit=${limit}&offset=${offset}`;
    return fetch(url, {method: 'GET'});
};

export const getMemberOfForRoom = (userId: string, limit: number, offset: number) => {
    const url =
        COMMUNITY_API_URL +
        `/memberof/for-room?userId=${userId}&limit=${limit}&offset=${offset}`;
    return fetch(url, {method: 'GET'});
};

export const isHandleTaken = (handle: string) => {
    const url = COMMUNITY_API_URL + `/handle-taken?handle=${handle}`;
    return fetch(url, {method: 'GET'});
};

// return: CommunityInviteCandidate[]
export const invitePeople = (
    creatorUserId: string,
    communityId: string,
    limit: number,
    offset: number,
) => {
    const url =
        COMMUNITY_API_URL +
        `/invite/people?creatorUserId=${creatorUserId}&communityId=${communityId}&limit=${limit}&offset=${offset}`;
    return fetch(url, {method: 'GET'});
};

// return: CommunityLogoUploadResponse
export const uploadLogo = (file: any) => {
    const url = COMMUNITY_API_URL + '/logo';
    const data = new FormData();
    data.append('file', file);
    return fetch(url, {method: 'POST', body: data});
};

export const createCommunity = (request: ClubhouseCommunityUpdateRequest) => {
    const url = COMMUNITY_API_URL + '/';
    return fetch(url, {
        method: 'POST',
        body: JSON.stringify(request),
        headers: {'Content-Type': 'application/json'},
    });
};

export const inviteMember = (request: ClubhouseCommunityMember) => {
    const url = COMMUNITY_API_URL + '/invite';
    return fetch(url, {
        method: 'POST',
        body: JSON.stringify(request),
        headers: {'Content-Type': 'application/json'},
    });
};

export const getCommunity = (communityId: string, userId: string) => {
    const url =
        COMMUNITY_API_URL + `/?communityId=${communityId}&userId=${userId}`;
    return fetch(url, {method: 'GET'});
};

export const getCommunityByHandle = (handle: string, userId: string) => {
    const url =
        COMMUNITY_API_URL + `/handle/?handle=${handle}&userId=${userId}`;
    return fetch(url, {method: 'GET'});
};

export const followCommunity = (request: ClubhouseCommunityFollow) => {
    const url = COMMUNITY_API_URL + '/follow';
    return fetch(url, {
        method: 'POST',
        body: JSON.stringify(request),
        headers: {'Content-Type': 'application/json'},
    });
};

export const getCommunityMembers = (
    followerUserId: string,
    communityId: string,
    limit: number,
    offset: number,
) => {
    const url =
        COMMUNITY_API_URL +
        `/members?followerUserId=${followerUserId}&communityId=${communityId}&limit=${limit}&offset=${offset}`;
    return fetch(url, {
        method: 'GET',
    });
};

export const getCommunityFollowers = (
    followerUserId: string,
    communityId: string,
    limit: number,
    offset: number,
) => {
    const url = COMMUNITY_API_URL + `/followers?followerUserId=${followerUserId}&communityId=${communityId}&limit=${limit}&offset=${offset}`;
    return fetch(url, {method: 'GET'});
};

export const deleteCommunity = (request: DeleteCommunityRequest) => {
    const url = COMMUNITY_API_URL + '/delete';
    return fetch(url, {
        method: 'POST',
        body: JSON.stringify(request),
        headers: {'Content-Type': 'application/json'},
    });
};

export const getInviteStatus = (communityId: string, userId: string) => {
    const url = COMMUNITY_API_URL + `/invite/status?communityId=${communityId}&userId=${userId}`;
    return fetch(url, {
        method: 'GET',
    });
};

export const acceptOrRejectInvite = (request: CommunityJoinAcceptRequest) => {
    const url = COMMUNITY_API_URL + '/invite/accept';
    return fetch(url, {
        method: 'POST',
        body: JSON.stringify(request),
        headers: {'Content-Type': 'application/json'},
    });
};

export const searchCommunities = (
    searchStr: string,
    limit: number,
    offset: number,
) => {
    const url = COMMUNITY_API_URL + `/search?searchStr=${searchStr}&limit=${limit}&offset=${offset}`;
    return fetch(url, {
        method: 'GET',
    });
};

export const getCommunitiesForVertical = (
    verticalId: string,
    userId: string,
    limit: number,
    offset: number,
) => {
    const url = COMMUNITY_API_URL + `/vertical?verticalId=${verticalId}&userId=${userId}&limit=${limit}&offset=${offset}`;
    return fetch(url, {method: 'GET'});
};

export const leaveCommunity = (request: CommunityLeaveRequest) => {
    const url = COMMUNITY_API_URL + '/leave';
    return fetch(url, {
        method: 'POST',
        body: JSON.stringify(request),
        headers: {'Content-Type': 'application/json'},
    });
};

export const removeFromCommunity = (request: CommunityLeaveRequest) => {
    const url = COMMUNITY_API_URL + '/remove';
    return fetch(url, {
        method: 'POST',
        body: JSON.stringify(request),
        headers: {'Content-Type': 'application/json'},
    });
};

export const getCreateCommunityStatus = (
    userId: string,
) => {
    const url = COMMUNITY_API_URL + `/create-status?userId=${userId}`;
    return fetch(url, {method: 'GET'});
};

export const getCommunityByHandleWithoutUser = (handle: string) => {
    const url = COMMUNITY_API_URL + `/handle/without-user?handle=${handle}`;
    return fetch(url, {method: 'GET'});
};
