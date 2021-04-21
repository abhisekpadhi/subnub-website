import {POST_SVC_URL} from '../constants';

const CLUBHOUSE_API_URL = POST_SVC_URL + '/clubhouse/v1';

export interface ClubhouseRoom {
    roomId: string;
    title: string;
    description: string;
    type: ClubhouseRoomType;
    scheduledAt: number;
    startedAt: number;
    minAgeYr: number;
    maxAgeYr: number;
    createdAt: number;
    createdBy: string;
    status: ClubhouseRoomStatus;
    currentActive: boolean;
}

export interface ClubhouseRoomUpdateRequest {
    roomId: string;
    title: string;
    description: string;
    type: ClubhouseRoomType;
    scheduledAt: number;
    startedAt: number;
    minAgeYr: number;
    maxAgeYr: number;
    createdBy: string;
    status: ClubhouseRoomStatus;
    modsUserIdList: string[];
}

export enum ClubhouseRoomStatus {
    ACTIVE = 'ACTIVE',
    INACTIVE = 'INACTIVE',
}

export enum ClubhouseRoomType {
    OPEN = 'OPEN',
    SOCIAL = 'SOCIAL',
    CLOSED = 'CLOSED',
}

export interface ClubhouseInviteSpendUpdateRequest {
    nominatorUserId: string;
    nomineeUserId: string;
    nomineeUserPhone: string;
    status: ClubhouseInviteStatus;
}

export enum ClubhouseInviteStatus {
    INVITED = 'INVITED',
    ACCEPTED = 'ACCEPTED',
}

export interface ClubhouseInviteStatusRequest {
    userId: string;
    userPhone: string;
}

export interface ClubhouseRoomJoinRequest {
    userId: string;
    roomId: string;
    wasInvited: boolean;
}

export interface ClubhouseRoomLeaveRequest {
    userId: string;
    roomId: string;
}

export interface ClubhouseRoomJoinInviteRequest {
    roomId: string;
    userId: string;
    invitedAt: string;
    invitedBy: string;
}

// Responses
export interface ClubhouseRoomJoinResponse {
    userId: string;
    roomId: string;
    role: ClubhouseRoomParticipantRole;
    canJoin: boolean;
    rtcToken: string;
    rtcTokenCreatedAt: number;
}

export interface ClubhouseInviteStatusResponse {
    userId: string;
    userPhone: string;
    invited: boolean;
    invitedByUserId: string;
    invitedByUserProfilePicUrl: string;
    invitedByUserFullName: string;
}

export enum ClubhouseRoomParticipantRole {
    ADMIN = 'ADMIN', // SubNub staff
    HOST = 'HOST', // Who created the room
    MODERATOR = 'MODERATOR', // Who can moderate the room
    AUDIENCE = 'AUDIENCE',
}

export interface ClubhouseCoHostProfile {
    userId: string;
    fullName: string;
    profilePicOutputUrl: string;
}

export interface ClubhouseInviteBalance {
    userId: string;
    createdAt: number;
    inviteCount: number;
    currentActive: boolean;
}

export interface ScheduledRoom {
    roomId: string;
    scheduledAt: number;
    title: string;
    description: string;
    type: ClubhouseRoomType;
    minAgeYr: number;
    maxAgeYr: number;
    createdBy: string;
    status: ClubhouseRoomStatus;
    coHosts: ClubhouseCoHostProfile[];
}

export interface ClubhouseParticipantRoleChangeRequest {
    roomId: string;
    userId: string;
    role: ClubhouseRoomParticipantRole;
}

export interface Hallway {
    rooms: HallwayRoomCard[];
}

export interface HallwayRoomCard {
    roomId: string;
    title: string;
    description: string;
    speakerCount: number;
    participantCount: number;
    speakerPics: string[];
    speakerNames: string[];
}

export interface ExploreCreatorProfile {
    userId: string;
    username: string;
    fullName: string;
    profilePicOutputUrl: string;
    bio: string;
}

export interface CHCreatorFollowers {
    creatorId: string;
    followerId: string;
    followers: CHCreatorFollower[];
}

export interface CHCreatorFollower {
    userId: string;
    profilePicUrl: string;
    fullName: string;
    following: boolean;
    bio: string;
}
export const getScheduledRoom = (roomId: string) => {
    const url = CLUBHOUSE_API_URL + `/scheduled/room?roomId=${roomId}`;
    return fetch(url, {method: 'GET'});
};
