import {API_URL, POST_SVC_URL} from '../constants';

const COMMUNITY_API_URL = API_URL + '/api/community';

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

export const getCommunityByHandleWithoutUser = (handle: string) => {
    const url = COMMUNITY_API_URL + `/handle/without-user?handle=${handle}`;
    return fetch(url, {method: 'GET'});
};
